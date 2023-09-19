// upload image in IMGBB
export const imageUpload = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=77f11c1eb552ae7fdf1a0d6f34ce0a62`
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    return data
  }