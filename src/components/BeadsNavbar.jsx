"use client";

import { useState } from "react";
import { Button, Navbar } from "flowbite-react";

export function BeadsNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src="/your-logo.png" className="mr-3 h-6 sm:h-9" alt="Beads By Bey Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Beads By Bey</span>
            </Navbar.Brand>
            <div className="flex lg:order-2">
                <Button>Shop Now</Button>
                <Navbar.Toggle onClick={() => setIsOpen(!isOpen)} />
            </div>
            <Navbar.Collapse isOpen={isOpen}>
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/products">Products</Navbar.Link>
                <Navbar.Link href="/gallery">Gallery</Navbar.Link>
                <Navbar.Link href="/custom-orders">Custom Orders</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
