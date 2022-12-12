export interface ButtonComponent {
    title?: string;
    type?: string;
    backgroundColor?: string;
    Icon?: React.ReactNode;
    onCLick?: () => void;
    border?: any;
    borderColor?: string;
}
