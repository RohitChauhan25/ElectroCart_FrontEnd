import { Input, Select, Button, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { UploadOutlined } from '@ant-design/icons'
import { Container, Form } from 'Styles/AddProducts'
import { useForm } from 'react-hook-form'

const For = [
  {
    label: 'Men',
    value: 'men',
  },
  {
    label: 'Women',
    value: 'women',
  },
]

const Category = [
  {
    label: 'Clothing',
    value: 'clothing',
  },
  {
    label: 'Footwear',
    value: 'footwear',
  },
  {
    label: 'Beaty',
    value: 'beaty',
  },
  {
    label: 'ACCESSORIES',
    value: 'accessories',
  },
]

const Type = [
  {
    label: 'Shirt',
    value: 'shirt',
  },
  {
    label: 'T-shirt',
    value: 't-shirt',
  },
  {
    label: 'Jeans',
    value: 'jeans',
  },
  {
    label: 'Top',
    value: 'top',
  },
  {
    label: 'Kurtas',
    value: 'kurtas',
  },
  {
    label: 'Top',
    value: 'top',
  },
]

function AddProduct() {
  const { setValue, handleSubmit } = useForm()
  // const [file, setFile] = useState('')

  const uploadImage = async (info: any) => {
    const formData = new FormData()
    formData.append('file', info.file.originFileObj)
    formData.append('upload_preset', 'insta-clone')
    formData.append('cloud_name', 'diyaofpbn')

    const res = await fetch('https://api.cloudinary.com/v1_1/diyaofpbn/upload', {
      method: 'POST',
      body: formData,
    })

    const { secure_url } = await res.json()
    if (secure_url) {
      setValue('image', secure_url)
      // setFile(secure_url)
    }
  }

  const submitPost = (data: any) => {
    return data
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(submitPost)}>
        <Input placeholder="brand" onChange={(e: any) => setValue('brand', e.target.value)} />
        <Input placeholder="caption" onChange={(e: any) => setValue('caption', e.target.value)} />
        <TextArea
          rows={4}
          placeholder="enter product description"
          onChange={(e: any) => setValue('desc', e.target.value)}
        />
        <Upload showUploadList={false} accept=".png,.jpeg,video/mp4,video/x-m4v,video,.avif" onChange={uploadImage}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Select placeholder="select for" options={For} onSelect={(value: any) => setValue('for', value)} />
        <Select placeholder="select Type" options={Type} onSelect={(value: any) => setValue('type', value)} />
        <Select placeholder="category" options={Category} onSelect={(value: any) => setValue('category', value)} />

        <button>submit</button>
      </Form>
    </Container>
  )
}

export default AddProduct
