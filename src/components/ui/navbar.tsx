import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { RiBrainFill } from "react-icons/ri";

export default function ResponsiveNavbar() {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-transparent">
            <Link href="/" className="flex items-center gap-2 text-white" prefetch={false}>
                <RiBrainFill size={30} />
                <span className="text-lg body-bold">Personatrack</span>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className=" text-white">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-gradient-to-b from-[#24234b] to-[#000000] text-white">
                    {/* Add a SheetTitle for accessibility */}
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="grid w-[200px] p-4 gap-6">
                        <Link href="/" className="text-lg body hover:underline underline-offset-4" prefetch={false}>
                            Home
                        </Link>
                        <Link href="/about" className="text-lg body hover:underline underline-offset-4" prefetch={false}>
                            About
                        </Link>
                        <Link href="/privacy" className="text-lg body hover:underline underline-offset-4" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="/contact" className="text-lg body hover:underline underline-offset-4" prefetch={false}>
                            Contact
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {}

function MenuIcon(props: MenuIconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}
