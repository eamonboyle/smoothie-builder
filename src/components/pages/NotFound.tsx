import './NotFound.css'

export const NotFound: React.FC = () => {
    return (
        <>
            <>
                <link
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />
                <div className="page-404">
                    <div className="outer">
                        <div className="middle">
                            <div className="inner">
                                {/*BEGIN CONTENT*/}
                                <div className="inner-circle">
                                    <i className="fa fa-home" />
                                    <span>404</span>
                                </div>
                                <span className="inner-status">Oops! You're lost</span>
                                <span className="inner-detail">
                                    We can not find the page you're looking for. <br />
                                    <a href="/" className="btn btn-info mtl">
                                        <i className="fa fa-home" />
                                        &nbsp; Return home
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}