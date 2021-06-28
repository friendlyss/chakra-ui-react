import React, { useState } from 'react'
import { BoxFileFieldProps } from './BoxFileField'
import { Image, ImageProps, Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { useFieldState } from '../hooks'
import { BoxFile } from '..'

// @ts-ignore
interface ImageFileFieldProps extends Partial<BoxFileFieldProps> {
  name: string
  label?: string
  _image?: ImageProps
  isMultiple?: boolean
  onChange?: (files: File) => void
}

const ImageFileField: React.FC<ImageFileFieldProps> = ({
  name,
  label,
  _image,
  isMultiple,
  onChange,
  ...rest
}) => {
  const [source, setSource] = useState('')
  const [, setValue] = useFieldState<any>(name, undefined, {
    onSetValue: (v) => {
      setSource(v)
    }
  })

  const onChangeFile = (files: FileList) => {
    setSource(() => URL.createObjectURL(files.item(0)))
  }

  return (
    <BoxFile
      overflow='hidden'
      input={{
        multiple: isMultiple || false,
        onChange: (e) => {
          if (!e.target.files) return

          const file = e.target.files.item(0)

          if (!file) return

          onChange?.(file)
          onChangeFile(e.target.files)

          setValue(() => file)
        }
      }}
      {...rest}
    >
      <React.Fragment>
        {source ? (
          <Image
            w='100%'
            h='100%'
            objectFit='contain'
            {..._image}
            src={source}
          />
        ) : (
          <Box
            w='100%'
            h='100%'
            d='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Text textAlign='center' fontWeight='bold' fontSize='sm'>
              {label}
            </Text>
          </Box>
        )}
      </React.Fragment>
    </BoxFile>
  )
}

export default ImageFileField
