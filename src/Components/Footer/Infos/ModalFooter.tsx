export default function ModalFooter({ children }: { children: React.ReactNode }) {
    return <div className="fixed h-[100vh] w-[100vw] top-0 left-0 flex justify-center items-center z-50 bg-black/50">
        <div className="max-w-3xl min-w-3xl  mx-auto px-6 shadow rounded-xl  py-10 text-gray-800 bg-white">{children}</div>
    </div>
}
