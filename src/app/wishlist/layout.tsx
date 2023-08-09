import { SessionProvider } from "next-auth/react"

export default function WishlistLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <section>
                <div>
                    Header wishlish
                </div>
                {children}
                <div>
                    Footer wishlist
                </div>
            </section>
    )
}
