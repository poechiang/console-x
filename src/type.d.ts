declare interface ReduxAction {
    type: Symbol;
    [x: string]: any;
}
declare interface ComponentProps {
    className?: string;
    style?: { [x: string]: string | number };
    [x: string]: any;
}
declare interface Language {
    key: string;
    icon?: ReactComponent;
    label?: string;
}
