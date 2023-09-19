import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

const EditNews = ({ newsData }) => {
    const [title, setTitle] = useState(newsData.title)
    const [description, setDescription] = useState(newsData.description)
    const [category, setCategory] = useState(newsData.category)

    const categories = ['Sport', 'Teknologi', 'Politik', 'Ekonomi', 'Hiburan']

    const [isOpen, setIsOpen] = useState(false)

    const handleUpdate = (e) => {
        e.preventDefault()
        const data = {
            id: newsData.id,
            title: title,
            description: description,
            category: category
        }
        router.patch('/news', data)
        handleModal()
    }

    const handleModal = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            setTitle(newsData.title)
            setDescription(newsData.description)
            setCategory(newsData.category)
        }
    }

    return (
        <>
            <button className='btn btn-warning btn-sm' onClick={handleModal}>Edit</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box w-11/12 max-w-4xl">
                    <h3 className="font-bold text-2xl mb-4 text-center">Edit News</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control mt-2 w-full max-w-sm">
                            <div className="label fon-bold">Title</div>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='input input-bordered' />
                        </div>
                        <div className="form-control mt-2 w-full">
                            <div className="label fon-bold">Description</div>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='textarea textarea-bordered' />
                        </div>
                        <div className="form-control mt-2 w-full">
                            <div className="label fon-bold">Category</div>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
                                <option value="" disabled selected>Pick One</option>
                                {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                            </select>
                        </div>
                        <div className="modal-action">
                            <button className="btn" type="button" onClick={handleModal}>Close</button>
                            <button className="btn btn-primary" type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditNews