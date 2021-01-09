var topicStr = 'topicStr@Programming / 编程相关:Study Notes for Python>#,Programming Basics>#,Github 开源项目练手>#,Study Notes for Ruby>#|Design / 设计相关:Study Notes for AI>#,Design Elements>#,Fonts>#,Color Palette>#,动画>#|Web / 网页相关:Study Notes for Html>#,Study Notes for Css>#,Study Notes for Javascript>#,其他工具>#|Modeling / 建模相关:Study Notes for Blender>#|Others / 其他相关:Study Notes for AI>#,Design Elements>#,Fonts>#,Color Palette>#,动画>#' // python处理后的下拉菜单按钮名，项目名和超链接地址
var topicNames= new Array(); //所有的下拉菜单按钮名
var topicItems= new Array(); //所有的菜单选项名

window.onload = function () {
    loadSideBar();
	loadTopicsAndItems();
	loadSideBarButtons();
}

function loadSideBar(){
    //<div id="mySidebar" class="sidebar" onmouseover="showSidebar(this)" onmouseout="hideSidebar(this)">
    //  <form><input type="search" placeholder=""></form>
    //  <hr></hr>
	//</div>
	
	var sideBar = document.createElement('div'); //1.创建导航菜单
	sideBar.id='mySidebar';
	sideBar.classList.add('sidebar');
	sideBar.onmouseover = function() { showSidebar(this) };
	sideBar.onmouseout = function() { hideSidebar(this) };
	document.body.children[0].after(sideBar);
	
	var searchForm = document.createElement('form'); //2.创建搜索栏
	var searchBox = document.createElement('input');
	searchBox.setAttribute("type","search");
	searchBox.setAttribute("placeholder","");
	sideBar.appendChild(searchForm);
	searchForm.appendChild(searchBox);
	
	sideBar.appendChild(document.createElement('hr')); //3.创建水平分割线
	
}

function loadTopicsAndItems(){
    var topicList = topicStr.split('@')[1].split('|');
	for (var i = 0; i < topicList.length; i++) {  
			topicAndItem=topicList[i]
			topicNames.push(topicAndItem.split(':')[0]);
			topicItems.push(topicAndItem.split(':')[1]);		
		}  
}

function loadSideBarButtons(){
    //<button class="dropdown-btn" onmousedown="pressDropDownButton(this)"><span>Programming / 编程相关</span></button>
    //<div class="dropdown-container">
    //  <a href="#">Study Notes for Python</a>
    //  <a href="#">Programming Basics</a>
    //  <a href="#">Github 开源项目练手</a>
	//  <a href="#">Ruby</a>
    //</div>
	
	var sidebar = document.getElementById('mySidebar'); //1、找到父级容器侧边导航栏
    
	topicNames.forEach((topicName, index)=>{
		var dropDownButton = document.createElement('button'); //2、创建下拉菜单按钮
		dropDownButton.className="dropdown-btn";
		dropDownButton.onclick = function() { pressDropDownButton(this) };
		var buttonName = document.createElement('span');
		buttonName.innerText = topicName;
		dropDownButton.appendChild(buttonName);
		sidebar.appendChild(dropDownButton);

		var dropDownMenu = document.createElement('div'); //3、创建下拉菜单容器
		dropDownMenu.className="dropdown-container";
		sidebar.appendChild(dropDownMenu);
		
		topicItems[index].split(',').forEach((item)=>{
			var menuItem = document.createElement('a'); //4、创建菜单选项
			itemNameAndLink=item.split('>');
			menuItem.innerText = itemNameAndLink[0];
			menuItem.href=itemNameAndLink[1];
			dropDownMenu.appendChild(menuItem);
		});

    });
	
}