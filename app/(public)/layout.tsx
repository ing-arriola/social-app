const PublicLayout = ({children}:{children:React.ReactNode}) => {
    return(
        <main className="flex items-center min-h-screen max-w-md justify-center m-auto ">
            {children}
        </main>
    )
}

export default PublicLayout