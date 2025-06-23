import { ResponsiveDialog } from "@/components/Responsive-Dialouge"
import { MeetingForm } from "./Meeting-Form";
import { MeetingGetOne } from "../../types";
interface UpdateMeetingDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialValues: MeetingGetOne;
}

const UpdateMeetingDialog = ({ open, onOpenChange, initialValues }: UpdateMeetingDialogProps) => {
    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={onOpenChange}
            title="Edit Meeting"
            description="Edit the meeting details"

        >
            <MeetingForm
                onSuccess={() => {
                    onOpenChange(false)

                }}
                onCancel={() => onOpenChange(false)}
                initialValues={initialValues}
            />
        </ResponsiveDialog>
    )
}

export default UpdateMeetingDialog