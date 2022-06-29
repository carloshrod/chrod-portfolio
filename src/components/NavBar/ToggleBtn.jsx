function ToggleBtn({ showLinks, setShowLinks }) {
    return (
        <div className="toggle-btn btn-show-links"
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