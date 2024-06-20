import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <section className="flex flex-col gap-10 items-center justify-center mx-auto py-20">
                <h3 className="font-medium text-3xl text-titleGray text-center">Sorry, this page doesn't exists yet :(</h3>
                <Link to="/">
                    <button className='px-20 py-3 self-center rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown'>Back to home</button>
                </Link>
            </section>
        </>
    )
}

export default Error404