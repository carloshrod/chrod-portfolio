const ToggleBtn = ({ showLinks, setShowLinks }) => {
    return (
        <div className="toggle-btn"
            onClick={() => setShowLinks(!showLinks)}>
            <i className={`bx ${(!showLinks)
                ? "bx-menu bx-md bx-tada-hover"
                : "bx-x-circle bx-md bx-tada-hover"}`
            }
            />
        </div>
    )
}

export default ToggleBtn;
