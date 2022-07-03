import foto from "../foto.jpg"

export default function AboutMe() {
    return (
        <>
        <section className="home-section">
        <div className="container">
            <div className="row">
                
                 <div className="col-sm-offset-2 col-md-4 col-sm-6 margin-left-setting">
                    <div className="margin-top-150">
                        
                     <div className="table-responsive">
					    <table className="table">
							<tr>
							    <td>Name</td>
								<td>Josua Williams</td>
							 </tr>
                             <tr>
								<td>Email</td>
								<td>josuawilliams17@gmail.com</td>
							</tr>
							<tr>
								<td>Designation</td>
								<td>Web BackEnd Developer</td>
							 </tr>
							<tr>
								<td>Experience</td>
								<td>8 Years</td>
							</tr>
							<tr>
								<td>Contact</td>
								<td>+000000000</td>
							</tr>
						</table>
					  </div>
                     </div>
                   </div>
                 
                 <div className="col-md-5 col-sm-6">
                    <div className="me-image">
                      <img className="photo" src={foto} alt=""/>
                  </div>
                </div>
              </div>
            </div>
        </section>
        </>
    )
}