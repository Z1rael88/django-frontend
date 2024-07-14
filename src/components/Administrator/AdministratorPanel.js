import AdministratorSideBar from "./AdministratorSideBar";

function AdministratorPanel(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3 ">
                    <AdministratorSideBar/>
                </aside>
                <section className="col-md-9">
                    Panel admina
                </section>
            </div>
        </div>
    );
}
export default AdministratorPanel;