import { ArrowUpRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bottom-0 w-full p-2 font-mono text-center border-t">
            Made with ❤️ by{' '}
            <a
                href="https://github.com/CantBeSubh"
                className='inline-flex items-center font-bold text-blue-500'
                target="_blank"
            >
                Subhranshu <ArrowUpRight className="w-4 h-4" />
            </a>
        </footer>
    );
}

export default Footer;