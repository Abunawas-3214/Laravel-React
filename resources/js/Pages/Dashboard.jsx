import AddNews from '@/Components/News/AddNews';
import DeleteNews from '@/Components/News/DeleteNews';
import EditNews from '@/Components/News/EditNews';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Dashboard({ auth, flash, newsData }) {

    useEffect(() => {
        if (!newsData) {
            router.get('/news')
        }
    })
    const news = newsData
    const message = flash.message

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome {auth.user.name}</h2>}
        >
            <Head title="Dashboard" />
            <div className='mt-12 w-10/12 px-4 h-screen mx-auto'>
                <AddNews />
                {message &&
                    <div className="alert alert-success mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{message}</span>
                        <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                    </div>
                }
                <div className="overflow-x-auto mt-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map((news, index) => (
                                <tr key={news.id}>
                                    <td>{index + 1}</td>
                                    <td>{news.title}</td>
                                    <td>
                                        <p className='line-clamp-1'>
                                            {news.description}
                                        </p>
                                    </td>
                                    <td>{news.category}</td>
                                    <td className='flex justify-center space-x-2'>
                                        <EditNews newsData={news} />
                                        <DeleteNews newsData={news} />
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
