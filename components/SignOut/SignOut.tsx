import { Button } from "@nextui-org/react"
import { signOut, useSession } from "next-auth/react"

export const SignOut = () => {
    const {data: session} = useSession()
    return (
        <div>
            <Button onClick={()=>signOut()} variant="flat" color="error">
                Sign Out
            </Button>
        </div>
    )
}