import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

const DeleteNews = ({ newsData }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleDelete = () => {
        const data = {
            id: newsData.id,
            title: newsData.title
        }
        router.delete(`/news/${newsData.id}`)
        handleModal()
    }

    const handleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button className='btn btn-error btn-sm' onClick={handleModal}>Delete</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box w-11/12 max-w-4xl">
                    <h3 className="font-bold text-2xl mb-4 text-center">Delet News</h3>
                    <p>Are you sure you want to delete this news: {newsData.title}</p>
                    <div className="modal-action">
                        <button className="btn" type="button" onClick={handleModal}>Close</button>
                        <button className="btn btn-primary" type="submit" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteNews