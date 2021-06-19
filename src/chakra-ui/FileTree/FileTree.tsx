import React from 'react'
import Col from '../Col'

interface FileTreeProps {}

const FileTree: React.FC<FileTreeProps> = ({ children }) => {
  return <Col>{children}</Col>
}

export default FileTree
