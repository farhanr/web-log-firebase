import Image from 'next/image'

export default function Navbar() {
    return (
        <>
            <div className="font-sans w-100 bg-white text-darksea shadow">
                <div className="relative flex w-100 px-3 py-3 justify-between items-center">
                    <a href="/">
                        <div className="flex items-center gap-2">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Excellent Seafood Indonesia Logo"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className="text-xl md:text-3xl font-semibold text-purple-900">IoT-let Monitoring</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}