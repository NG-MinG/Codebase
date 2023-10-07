<style>
	.content {
		width: 700px;
		background-color: #F6F6F6;
		color: #333333;
		padding: 4rem 5rem;
		margin: auto;
		border-radius: 15px;
	}

	.flexible {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.h2 {
		margin: 0px;
		font-size: 24px;
	}

	.hr {
		display: block;
		border-bottom: 1px solid black;
	}

	.folder {
		display: flex;
		align-items: center;
		font-size: 20px;
		gap: 1rem;
	}

	.folder > span > b {
		font-size: 20px;
		font-weight: 500;
	}

	.folder-list {
		list-style-type: none;
	}

	.description-list, .folder > span {
		font-size: 18px;
	}
</style>
<body>
	<div class="content">
		<div class="wrapper">
			<h2 class="h2">MÔI TRƯỜNG PHÁT TRIỂN</h2>
			<div class="flexible">
				<img width=100 src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="nodejs" />
				<img width=140 src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/express/express-original-wordmark.svg" alt="expressjs" />
				<img height=50 src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="typescript" />
			</div>
		</div>
		<br />
		<div class="wrapper">
			<h2 class="h2">CÔNG NGHỆ SỬ DỤNG</h2>
			<div class="flexible">
				<img width=120 src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/socketio/socketio-original-wordmark.svg" alt="socketio" />
				<img width=150 src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/RabbitMQ_logo.svg/2560px-RabbitMQ_logo.svg.png" alt="rabbitmq" />
				<img height=40 src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/2560px-Logo-redis.svg.png" alt="redis" />
			</div>
			<div class="flexible">
				<img height=75 src="https://openwhisk.apache.org/images/deployments/logo-docker-compose-text.svg" alt="docker compose" />
				<img height=45 src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="mongodb" />
				<img height=25 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/2560px-Nginx_logo.svg.png" alt="nginx" />
			</div>
			<br />
			<br />
			<div class="flexible">
				<img height=35 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cloudinary_logo.svg/2560px-Cloudinary_logo.svg.png" alt="cloudinary" />
			</div>
		</div>
		<br />
		<br />
		<br />
		<div class="wrapper">
			<h2 class="h2">CÔNG CỤ HỖ TRỢ</h2>
			<br />
			<div class="flexible">
				<img height=55 src="https://brandslogos.com/wp-content/uploads/images/large/docker-logo.png" alt="docker" />
				<img width=130 src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png" alt="postman" />
				<img width=130 src="https://pngimg.com/d/github_PNG15.png" alt="github" />
				<img width=90 src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" alt="git" />
			</div>
		</div>
		<br />
		<br />
		<br />
		<div class="wrapper">
			<h2 class="h2">PACKAGE MANAGER</h2>
			<br />
			<div class="flexible">
				<img height=55 src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yarn-logo-kitten.svg/1200px-Yarn-logo-kitten.svg.png" alt="yarn" />
			</div>
		</div>
		<!-- <br />
		<br />
		<br />
		<div class="wrapper">
			<h2 class="h2">ARCHITECTURE</h2>
			<br />
			<div class="flexible">
				<img height=55 src="https://assets.exitcertified.com/assets/Uploads/MICROSERVICES_Logo.png" alt="microservices" />
			</div>
		</div> -->
	</div>
	<br />
	<br />
	<div class="content">
		<h1 align="center">CODEBASE</h1>
		<hr />
		<h2>STRUCTURE</h2>
		<ul class="folder-list">
			<li>
				<div class="folder">
					<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="server.ts" />
					<span><b>server.ts: </b>
					File chứa cấu hình toàn bộ server.
					</span>
				</div>
			</li>
			<li>
				<div class="folder">
					<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-log.svg" alt="Logs Folder" />
					<span><b>logs: </b></span>
				</div>
				<ul class="description-list">
					<li>Thư mục chứa các file logs của server.</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/log.svg" alt="access.log" />
							<span><b>access.log: </b>
							Chứa các yêu cầu đến API từ client.
							</span>
						</div>
					</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/log.svg" alt="activity.log" />
							<span><b>activity.log: </b>
							Chứa các hoạt động của server bao gồm cả error và access.
							</span>
						</div>
					</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/log.svg" alt="error.log" />
							<span><b>error.log: </b>
							Chứa các lỗi xảy ra ở server.
							</span>
						</div>
					</li>
				</ul>
			</li>
			<li>
				<div class="folder">
					<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-typescript.svg" alt="Types Folder" />
					<span><b>types: </b></span>
				</div>
				<ul class="description-list">
					<li>Thư mục chứa các định nghĩa cấu trúc dữ liệu của các module thứ 3 như express, socket.io.</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="index.d.ts" />
							<span><b>index.d.ts: </b>
							Định nghĩa các cấu trúc dữ liệu bổ sung cho các module.
							</span>
						</div>
					</li>
				</ul>
			</li>
			<li>
				<div class="folder">
					<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-shared.svg" alt="Common Folder" />
					<span><b>common: </b></span>
				</div>
				<ul class="description-list">
					<li>Thư mục chứa các file xử lý logic, thực thi, cấu hình, ....</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="app.ts" />
							<span><b>app.ts: </b>
							Đóng vai trò như hàm main của toàn bộ chương trình.
							</span>
						</div>
					</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="cloudinary.ts" />
							<span><b>cloudinary.ts: </b>
							Cung cấp kết nối xử lý gửi nhận đến Cloudinary.
							</span>
						</div>
					</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="rabbitmq.ts" />
							<span><b>rabbitmq.ts: </b>
							Cung cấp kết nối gửi nhận đến RabbitMQ.
							</span>
						</div>
					</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="redis.ts" />
							<span><b>redis.ts: </b>
							Cung cấp kết nối gửi nhận đến Redis.
							</span>
						</div>
					</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="socket.ts" />
							<span><b>socket.ts: </b>
							Cung cấp kết nối gửi nhận qua SocketIO.
							</span>
						</div>
					</li>
				</ul>
				<ul class="folder-list">
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-config.svg" alt="Configs Folder" />
							<span><b>configs: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các file cấu hình server</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="cors.config.ts" />
									<span><b>cors.config.ts: </b>
									Cấu hình cors option cho server từ file whitelist.
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-constant.svg" alt="Constansts Folder" />
							<span><b>constansts: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các file data tĩnh, cố định, ít thay đổi.	</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="mimes.ts" />
									<span><b>mimes.ts: </b>
									Chứa các kiểu tài nguyên tĩnh cho phép truy cập trực tiếp từ client mà không cần thông qua api của server. <em>File bổ trợ cho app.ts</em>
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="whitelist.origins.ts" />
									<span><b>whitelist.origins.ts: </b>
									Chứa các domain được cấp phép kết nối truy cập tài nguyên của server (CORS). <em>File bổ trợ cho cors.config.ts</em>
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-controller.svg" alt="Controllers Folder" />
							<span><b>controllers: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các controller xử lý các request từ client.</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="index.ts" />
									<span><b>index.ts: </b>
									Tập hợp các controller được export thông qua 1 file duy nhất. <strong>Mỗi controller được tạo ra phải được thêm vào file này.</strong> <em>File bổ trợ cho app.ts để quản lý các controller.</em>
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="user.example.controller.ts" />
									<span><b>user.example.controller.ts: </b>
									File mẫu về xử lý các logic liên quan đến user.
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=26 src="https://static-00.iconduck.com/assets.00/folder-icon-2048x1638-vinzc398.png" alt="Dtos Folder" />
							<span><b>dtos: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục file ràng buộc dữ liệu request từ client.</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="user.example.dto.ts" />
									<span><b>user.example.dto.ts: </b>
									File mẫu về xử lý ràng buộc request cho user controller  <em>File bổ trợ cho user.example.controller.ts để ràng buộc request từ client đến server.</em>
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-event.svg" alt="Events Folder" />
							<span><b>events: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các lớp xử lý các event tương ứng từ client thông qua giao thức websocket.</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="index.ts" />
									<span><b>index.ts: </b>
									Tập hợp các event được export thông qua 1 file duy nhất. <strong>Mỗi event được tạo ra phải được thêm vào file này.</strong> <em>File bổ trợ cho app.ts để quản lý các event.</em>
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="connect.example.event.ts" />
									<span><b>connect.example.event.ts: </b>
									File mẫu về xử lý các logic liên quan đến yêu cầu kết nối.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="disconnect.example.event.ts" />
									<span><b>disconnect.example.event.ts: </b>
									File xử lý yêu cầu ngắt kết nối.
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-interface.svg" alt="Interfaces Folder" />
							<span><b>interfaces: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các mẫu dữ liệu để ràng buộc lớp đối tượng (khác với dto hoặc model). Đối với các đối tượng đơn lẻ có thể tạo subfolder để chứa.</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="controller.ts" />
									<span><b>controller.ts: </b>
									Ràng buộc lớp controller.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="error.ts" />
									<span><b>error.ts: </b>
									Lớp thuần ảo ràng buộc error factory.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="event.ts" />
									<span><b>event.ts: </b>
									Ràng buộc lớp event.
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-middleware.svg" alt="Middlewares Folder" />
							<span><b>middlewares: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các middleware xử lý các request response từ client thông qua API.</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="cache.middleware.ts" />
									<span><b>cache.middleware.ts: </b>
									Middleware xử lý cache dữ liệu tại một số request.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="credential.middleware.ts" />
									<span><b>credential.middleware.ts: </b>
									Middleware xử lý cấp quyền truy cập cookie xử lý gửi / nhận thông qua cookie từ whitelist.origins.ts.
									<em>File bổ trợ cho app.ts để xử lý cho tất cả API.</em>
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="error.middleware.ts" />
									<span><b>error.middleware.ts: </b>
									Middleware đóng vai trò như director trong factory design pattern để tạo ra từng lỗi tương ứng và trả về client.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="validation.middleware.ts" />
									<span><b>validation.middleware.ts: </b>
									Middleware kiểm tra dữ liệu đầu vào của từng request khớp với dtos đặt tả hay không và trả về lỗi hoặc cấp phát quyền xử lý.
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-class.svg" alt="Models Folder" />
							<span><b>models: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các models tương tác với mongodb.</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="user.example.model.ts" />
									<span><b>user.example.model.ts: </b>
									File model mẫu tương tác với collection user để truy xuất thông tin, dữ liệu từ mongodb. <em>File bổ trợ cho user.example.controller.ts</em>
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-controller.svg" alt="Services Folder" />
							<span><b>services: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các business logic hay các services, mẫu thiết kế ....</li>
						</ul>
						<ul class="folder-list">
							<div class="folder">
								<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-error.svg" alt="Errors Folder" />
								<span><b>errors: </b></span>
							</div>
							<ul class="description-list">
								<li>Thư mục chứa các đối tượng error con sẽ được tạo ra.</li>
							</ul>
							<ul class="folder-list">
								<li>
									<div class="folder">
										<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="app.error.ts" />
										<span><b>app.error.ts: </b>
										Đối tượng lỗi app.
										</span>
									</div>
								</li>
							</ul>
							<ul class="folder-list">
								<li>
									<div class="folder">
										<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="db.error.ts" />
										<span><b>db.error.ts: </b>
										Đối tượng lỗi từ database.
										</span>
									</div>
								</li>
							</ul>
							<ul class="folder-list">
								<li>
									<div class="folder">
										<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="jwt.error.ts" />
										<span><b>jwt.error.ts: </b>
										Đối tượng lỗi khi xác thực jwt.
										</span>
									</div>
								</li>
							</ul>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="console.proxy.ts" />
									<span><b>console.proxy.ts: </b>
									Lớp đối tượng bổ sung cho việc ghi log quản lý truy cập request / responst / lỗi.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="error.factory.ts" />
									<span><b>error.factory.ts: </b>
									Lớp đối tượng tạo và quản lý các lỗi.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="mailer.factory.ts" />
									<span><b>mailer.builder.ts: </b>
									Lớp đối tượng cung cấp mail service để xử lý gửi / nhận mail.
									</span>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<div class="folder">
							<img height=40 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/folder-utils.svg" alt="Utils Folder" />
							<span><b>utils: </b></span>
						</div>
						<ul class="description-list">
							<li>Thư mục chứa các công cụ bổ trợ thêm với quy mô nhỏ lẻ sử dụng với từng mục đích cụ thể (khác với chức năng / services).</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="catch.error.ts" />
									<span><b>catch.error.ts: </b>
									Hỗ trợ bắt lỗi phía server cho các request bất đồng bộ.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="jwt.ts" />
									<span><b>jwt.ts: </b>
									Cung cấp đối tượng jwt để xử lý cấp phát, phân quyền, authentication.
									</span>
								</div>
							</li>
						</ul>
						<ul class="folder-list">
							<li>
								<div class="folder">
									<img height=30 src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/68c885e96f591d06ea1eb1e747422380f41bdc9e/icons/typescript.svg" alt="logger.ts" />
									<span><b>logger.ts: </b>
									Cung cấp 1 log-stream để xử lý việc ghi log vào file từ các middleware.
									</span>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<br />
	<br />
</body>
