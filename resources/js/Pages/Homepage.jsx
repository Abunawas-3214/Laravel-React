import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/NewsList';
import Pagination from '@/Components/Pagination';

export default function Homepage(props) {
    console.log(props);
    return (
        <div className='min-h-screen bg-white'>
            <Head title="Berita Portal" />
            <Navbar Auth={props.auth} />
            <div className='px-12 py-8'>
                <div className='flex gap-4 flex-wrap justify-center'>
                    {props.news.data.map((data) => (
                        <NewsList News={data} />
                    ))}
                </div>
                <div className='flex mt-12 items-center justify-center'>
                    <Pagination Meta={props.news.meta} />
                </div>
            </div>

        </div>
    )
}
