import { ChangeEvent, FormEvent, useRef } from "react";

export default function App() {

    return (
        <div>
            <Form1/>
            <PreviewMedia/>
        </div>
    );
}

function PreviewMedia() {
    const previewImage = useRef<HTMLImageElement>(null)
    const previewVideo = useRef<HTMLVideoElement>(null)
    const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files

        if (files?.length) {
            const file = files[0]
            const reader = new FileReader()
            reader.onload = () => {
                if (previewImage.current) {
                    previewImage.current.src = reader.result as string
                }
            }

            if (file) {
                reader.readAsDataURL(file)
            }
        }
    }

    const onVideoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files

        if (files?.length && previewVideo.current) {
            const file = files[0]
            const url = URL.createObjectURL(file)
            previewVideo.current.src = url
            previewVideo.current.onloadeddata = () => {
                URL.revokeObjectURL(url)
            }
        }

    }
    return <form encType="multipart/form-data" className="grid gap-4">
        <label htmlFor="image">Select Image</label>
        <label htmlFor="video">Select Video</label>
        <input className="hidden" id="image" type="file" name="image" accept="image/*" onChange={onImageChange} placeholder="Select an image"/>
        <input className="hidden" id="video" type="file" name="video" accept="video/*" onChange={onVideoChange}/>
        <img className="border p-1" ref={previewImage}/>
        <video className="w-full" controls ref={previewVideo}>

        </video>

    </form>
}


function UploadMUltipleFiles() {
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const fileInput = document.getElementById('file') as HTMLInputElement;
        const form = new FormData()
        if (fileInput.files?.length) {
            for (let index = 0; index < fileInput.files.length; index++) {
                form.append("files", fileInput.files[index])
            }
        }

        form.append("id", "1")
        form.append("date", new Date().toString())

        // when set f
        fetch("http://localhost:3000/upload", {
            method: "POST",
            body: form
        })

    }
    return <form onSubmit={onSubmit} encType="multipart/form-data">
        <input type="file" name="file" id="file" multiple accept="video/*"/>
        <button type="submit"> Submit</button>
    </form>
}

function UploadFormV1() {
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const fileInput = document.getElementById('file') as HTMLInputElement;
        const file = fileInput.files?.length ? fileInput.files[0] : null
        const form = new FormData()
        if (file) {
            form.append("file", file)
        }
        form.append("id", "1")
        form.append("date", new Date().toString())

        // when set f
        fetch("http://localhost:3000/upload", {
            method: "POST",
            body: form
        })

    }
    return <form onSubmit={onSubmit} encType="multipart/form-data">
        <input type="file" name="file" id="file" accept="video/*"/>
        <button type="submit"> Submit</button>
    </form>
}

function Form1() {
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const entries = Object.fromEntries(form.entries())
        console.log(entries)
        //v1
        fetch("https://api.restful-api.dev/objects", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                ...entries
            })
        })

        //v2
        /*
        * if we send formData,no need set header content type
        *
        * */
        fetch("https://api.restful-api.dev/objects", {
            method: "POST",
            body: form
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="add a name"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}