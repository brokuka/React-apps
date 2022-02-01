import './skeleton.scss';

const Skeleton = () => {
    return (
        <>
            <p className="char__select">Please select a character to see information</p>
            <div className="skeleton">
                <div className="pulse skeleton__header">
                    <div className="pulse skeleton__circle">Circle</div>
                    <div className="pulse skeleton__mini">Mini-line</div>
                </div>
                <div className="pulse skeleton__block">First-line</div>
                <div className="pulse skeleton__block">Second-line</div>
                <div className="pulse skeleton__block">Third-line</div>
            </div>
        </>
    )
}

export default Skeleton;