import {contact} from '@/data/contact';

export default function Footer() {
    return (
        <section className="border-t border-gray-800 bg-gray-900 text-white" id="contact">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Brand - tengah */}
                <div className="flex flex-col items-center gap-4">
                    <div className="text-2xl font-bold tracking-tight text-blue-400">
                        <h2>{contact.title}</h2>
                        <p>{contact.description}</p>
                    </div>

                    {/* Social icons (opsional) */}
                    <div className="flex gap-4 text-gray-400">
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200">{contact.link[0].email}</a>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200">{contact.link[0].linkedin}</a>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200">{contact.link[0].github}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}