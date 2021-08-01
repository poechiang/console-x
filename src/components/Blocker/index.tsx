const Blocker = ({ title, foot, content, children, className }: ComponentProps) => {
    return (
        <section className={'oc-blocker ' + (className || '')}>
            {title === false ? null : <header className="oc-blocker-head">{title}</header>}

            <article className="oc-blocker-body">{children || content}</article>

            {foot === false ? null : <footer className="oc-blocker-footer"></footer>}
        </section>
    );
};
export default Blocker;
