import { ResponsiveDialog } from "@/components/Responsive-Dialouge"
import { useRouter } from "next/navigation";
import { MeetingForm } from "./Meeting-Form";
interface NewMeetingDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const NewMeetingDialog = ({ open, onOpenChange }: NewMeetingDialogProps) => {
    const router = useRouter();
    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={onOpenChange}
            title="New Meeting"
            description="Create a new meeting"

        >
            <MeetingForm
                onSuccess={(id) => {
                    onOpenChange(false)
                    router.push(`/meetings/${id}`)
                }}
                onCancel={() => onOpenChange}
            />
        </ResponsiveDialog>
    )
}

export default NewMeetingDialog