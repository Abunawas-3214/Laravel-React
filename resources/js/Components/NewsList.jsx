import React from 'react'

const NewsList = ({ News }) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {News.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{News.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{News.category}</div>
                        <div className="badge badge-outline">{News.author}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsList