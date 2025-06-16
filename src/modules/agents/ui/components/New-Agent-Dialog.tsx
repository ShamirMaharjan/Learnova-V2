import { ResponsiveDialog } from "@/components/Responsive-Dialouge"
import { AgentForm } from "./Agent-Form";

interface NewAgentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
const NewAgentDialog = ({ open, onOpenChange }: NewAgentDialogProps) => {
    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={onOpenChange}
            title="New Agent"
            description="Create a new agent"

        >
            <AgentForm
                onSuccess={() => onOpenChange(false)}
                onCancel={() => onOpenChange(false)} />
        </ResponsiveDialog>
    )
}

export default NewAgentDialog