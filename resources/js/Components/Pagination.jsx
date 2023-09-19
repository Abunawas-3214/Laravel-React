import { Link } from '@inertiajs/react'
import React from 'react'

const Pagination = ({ Meta }) => {
    const current = Meta.current_page
    const nextLink = Meta.links[current + 1].url
    const prevLink = Meta.links[current - 1].url
    return (
        <>
            <div className="join">
                {prevLink ? <Link href={prevLink} className="join-item btn">«</Link> : ""}
                <button className="join-item btn">Page {current}</button>
                {nextLink ? <Link href={nextLink} className="join-item btn">»</Link> : ""}
            </div>
        </>
    )
}

export default Pagination