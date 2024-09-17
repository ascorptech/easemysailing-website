import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

interface QuillEditorProps {
  content?:any;
  setContent?: any;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ content, setContent }) => {
  
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    if (setContent) {
      setContent(data);
    }
  };

  return (
    <CKEditor
    
      editor={ ClassicEditor }
      data={content}
      config={ {
        toolbar: [
          'undo', 'redo', '|',
          'heading', '|', 'bold', 'italic', '|',
          'link', 'insertTable', 'mediaEmbed', '|',
          'bulletedList', 'numberedList', 'indent', 'outdent'
        ],
        plugins: [
          Bold,
          Essentials,
          Heading,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          MediaEmbed,
          Paragraph,
          Table,
          Undo
        ],
        initialData: '',
      } }
      onChange={handleEditorChange}
    />
  );
};

export default QuillEditor;

