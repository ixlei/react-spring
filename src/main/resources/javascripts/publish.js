var publishWidget = (function(){
	var album = '';
	var filesSelectList = [];
	var imagesSelectList = [];

	var filesList = [];
	var imagesList = [];
	var acceptImage = true;
	var otherTypeHTML = ['', ''];
	var forSelectedBoxBase = '';

	function dataReset(argument) {
		$('#forSelectedBox').children('ul').html('');
		$('#selectedBox').children('ul').html('');
		otherTypeHTML = ['', ''];
		filesSelectList = [];
		imagesSelectList = [];
	}

	function closeBox() {
		$('#publishBox').fadeOut();
		$('#screencover').fadeOut();
		dataReset();
	}

	function createCover() {
		$('#mainContainer').append('<div id="screencover"></div>');

		$('#screencover').attr({
			tabIndex: '-1'
		});

		$('#screencover').css({
			width: '100%',
			height: '100%',
			border: '0px',
			backgroundColor: 'white',
			top: '0px',
			left: '0px',
			position: 'fixed',
			opacity: '0.5',
			zIndex: '10000',
			display: 'none'
		});

	}

	function makeWindow() {
		var mainBox = $('#main');

		mainBox.append('<div id="publishBox"></div>');
		var box = $('#publishBox');

		box.css({
			width: '621px',
			height: '375px',
			position: 'fixed',
			left: (screen.availWidth - 621) / 2 + 'px',
			top: (screen.availHeight - 480) / 2 + 'px',
			zIndex: '10001',
			backgroundImage: 'url(/images/boxbg.png)',
			display: 'none'
		});

		box.append('<div id="publishBoxCloseButtonBox"></div>');

		var closeButtonBox = $('#publishBoxCloseButtonBox');

		var closeButton =
			'<a herf="javascript:void(0);">' +
				'<img src="/images/cancel.png">' +
			'</a>';

		closeButtonBox.append(closeButton);

		$('#publishBoxCloseButtonBox').css({
			cursor: 'pointer',
			position: 'absolute',
			top: '15px',
			left: '587px'
		});

		$('#publishBox').append('<p id="boxTitle">发布更多信息</p>');
		$('#boxTitle').css({
			color: 'white',
			position: 'absolute',
			top: '-5px',
			left: '10px'
		});

		return box;
	}

	function addTypeSelectBox(windowBox) {
		windowBox.append('<div id="typeSelectContainer"></div>');

		var typeSelectBox = $('#typeSelectContainer');

		typeSelectBox.append('<p style="display: inline">选择上传文件类型</p>');
		typeSelectBox.append('<input id="forImage" class="inPublishBox" type="radio">图片');
		typeSelectBox.append('<input id="forFile" class="inPublishBox"  type="radio">文件');

		$('input.inPublishBox').css({
			marginLeft: '50px'
		});

		$('#forImage').click();

		typeSelectBox.css({
			color: '#2A324B',
			position: 'absolute',
			top: '50px',
			left: '15px'
		})
	}

	function addContentSelectBox(windowBox) {
		windowBox.append('<div id="contentSelectBox"></div>');

		var contentSelectBox = $('#contentSelectBox');
		contentSelectBox.css({
			width: '555px',
			height: '205px',
			position: 'absolute',
			top: '100px',
			left: '20px'
		});

		contentSelectBox.append('<div id="forSelectedBox"></div>');
		contentSelectBox.append('<div id="selectedBox"></div>');

		var forSelectedBox = $('#forSelectedBox');
		var selectedBox = $('#selectedBox');

		forSelectedBox.css({
			width: '354px',
			height: '205px',
			border: '1px solid #2A324B',
			borderRadius: '5px',
			position: 'absolute',
			left: '0px',
			top: '0px',
			overflow: 'auto'
		});

		selectedBox.css({
			width: '193px',
			height: '205px',
			border: '1px solid #2A324B',
			borderRadius: '5px',
			position: 'absolute',
			left: '362px',
			top: '0px',
			overflow: 'auto'
		});

		var titleStyle =
			'font-size:2px;' +
			'top:-10px;' +
			'left:374px;' +
			'background-color: #FFFFFF;' +
			'color:#2A324B;' +
			'position:absolute;';

		contentSelectBox.append('<div style="' + titleStyle + '">已选择</div>');

		forSelectedBox.append('<ul></ul>');
		forSelectedBox.children('ul').css({
			whiteSpace: 'nowrap',
			marginTop: '10px',
			paddingLeft: '10px'
		});

		selectedBox.append('<ul></ul>');
		selectedBox.children('ul').css({
			whiteSpace: 'nowrap',
			marginTop: '10px',
			paddingLeft: '10px'
		});

		otherTypeHTML[0] = forSelectedBoxBase;
	}

	function showOnPage() {
		var albumContainer = $('#' + album);
		albumContainer.html('');

		albumContainer.append('<ul></ul>');
		albumContainer.children('ul').css({
			whiteSpace: 'nowrap',
			marginTop: '10px',
			paddingLeft: '10px'
		});

		var listItem;

		for (var i = 0; i < imagesList.length; i++) {
			if(!(imagesList[i] == null)) {
				listItem =
					'<li>' +
						'<div id="albumImageItem' + i + '" ' +
						'style="' +
						'width:150px;' +
						'height:150px;' +
						'display:inline-block;' +
						'margin:5px;' +
						'background-repeat:no-repeat;' +
						'background-size:150px 150px;' +
						'border: 1px solid #A4B3E4;' +
						'"></div>' +
					'</li>';

				albumContainer.children('ul').append(listItem);
				loadImage(imagesList[i], 'albumImageItem' + i);
			}
			
		}

		albumContainer.children('ul').children('li').css({
			display: 'inline',
			marginBottom: '5px'
		});
	}

	function addBottomButton(windowBox) {
		windowBox.append('<div id="okButton" class="bottomButton">确定</div>');
		windowBox.append('<div id="cancelButton" class="bottomButton">取消</div>');



		$('#okButton').click(function(){
			var forSelectedBox = $('#forSelectedBox');

			for (var i = 0; i < forSelectedBox.children('ul').children('li').length; i++) {
				if (acceptImage){
					if ($('#forSelectedImageItem' + i).children('input')[0].checked) {
						imagesList.push(imagesSelectList[i]);
					}
				} else {
					if ($((forSelectedBox.children('ul').children('li'))[i]).children('input')[0].checked) {
						filesList.push(filesSelectList[i]);
					}
				}
					
			};

			closeBox();

			showOnPage();
		});

		$('#cancelButton').click(closeBox);

		$('#okButton').css({
			left: '420px',
			backgroundImage: 'url(/images/bottomButtonbg.png)'
		});

		$('#cancelButton').css({
			left: '500px',
			backgroundImage: 'url(/images/bottomButtonbg.png)'
		});

		$('.bottomButton').css({
			position: 'absolute',
			top: '315px',
			width: '74px',
			height: '42px',
			textAlign: 'center',
			lineHeight: '240%',
			cursor: 'pointer'
		});
	}

	function createBox() {
		var box = makeWindow();
		addTypeSelectBox(box);
		addContentSelectBox(box);
		addBottomButton(box);
	}

	function showFilesForSelected(files) {
		var forSelectedBox = $('#forSelectedBox');
		var listItem;

		for (var i = 0; i < files.length; i++) {
			filesSelectList.push(files[i]);

			listItem = 
				'<li>' +
					'<input type="checkbox">' +
					'<div style="' +
					'display:inline-block;' +
					'text-overflow:ellipsis;' +
					'white-space:nowrap;' +
					'width:180px;' +
					'">' +
						files[i].name +
					'</div>' +
				'</li>';

			forSelectedBox.children('ul').append(listItem);
		}

		forSelectedBox.children('ul').children('li').css({
			height: '16px',
			marginBottom: '5px'
		});
	}

	function refreshFilesList() {
		for (var i = 0; i < filesList.length; i++) {
			if (filesList[i] == null) {
				filesList.splice(i, 1);
				--i;
			}
		}
	}

	function showFilesSelected() {
		var selectedBox = $('#selectedBox');
		var listItem;

		refreshFilesList();

		for (var i = 0; i < filesList.length; i++) {
			listItem = 
				'<li>' +
					'<div id="selectedFileItem' + i +'" ' +

					'style="' +
					'cursor:pointer;' +
					'display:inline-block;' +
					'text-overflow:ellipsis;' +
					'white-space:nowrap;' +
					'width:13px;' +
					'height:14px;' +
					'background-image:url(/images/cancel.png);' +

					'">' +
					'</div>' +
					'<div style="' +
					'display:inline-block;' +
					'text-overflow:ellipsis;' +
					'white-space:nowrap;' +
					'width:80px;' +
					'">' +
						filesList[i].name +
					'</div>' +
				'</li>';

			selectedBox.children('ul').append(listItem);

			$('#selectedFileItem' + i).click(function(event) {

				$(event.target).closest('li').remove();
				filesList[parseInt(event.target.id.slice(16))] = null;
			});

		}

		selectedBox.children('ul').children('li').css({
			height: '16px',
			marginBottom: '5px'
		});
	}

	function loadImage(file, id) {
		
		if(typeof file === 'object'&& file != null) {
			var reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = function() {
				$('#' + id).css({
					backgroundImage: 'url(' + this.result + ')'
				})
			}
		}
		
	}

	function showImagesForSelected(files) {
		var forSelectedBox = $('#forSelectedBox');
		var listItem;

		for (var i = 0; i < files.length; i++) {
			if ((files[i].type.split('/', 1))[0] == 'image') {
				imagesSelectList.push(files[i]);
			}
		};

		for (var i = 0; i < imagesSelectList.length; i++) {
			listItem =
				'<li>' +
					'<div id="forSelectedImageItem' + i + '" ' +
					'style="' +
					'width:150px;' +
					'height:150px;' +
					'display:inline-block;' +
					'margin:5px;' +
					'background-repeat:no-repeat;' +
					'background-size:150px 150px;' +
					'border: 1px solid #A4B3E4;' +
					'">' +
						'<input type="checkbox">' +
					'</div>' +
				'</li>';

			forSelectedBox.children('ul').append(listItem);
			loadImage(files[i], 'forSelectedImageItem' + i);
		}

		forSelectedBox.children('ul').children('li').css({
			display: 'inline',
			marginBottom: '5px'
		});
	}

	function refreshImagesList() {
		for (var i = 0; i < imagesList.length; i++) {
			if (imagesList[i] == null) {
				imagesList.splice(i, 1);
				--i;
			}
		}
	}

	function showImagesSelected() {
		var selectedBox = $('#selectedBox');
		var listItem;

		refreshImagesList();

		for (var i = 0; i < imagesList.length; i++) {
			listItem =
				'<li>' +
					'<div id="selectedImageItem' + i + '" ' +
					'style="' +
					'width:150px;' +
					'height:150px;' +
					'display:inline-block;' +
					'margin:5px;' +
					'background-repeat:no-repeat;' +
					'background-size:150px 150px;' +
					'border: 1px solid #A4B3E4;' +
					'">' +
						'<div id="selectedImageItemButton' + i +'" ' +
						'style="' +
						'cursor:pointer;' +
						'width:13px;' +
						'height:14px;' +
						'background-repeat:no-repeat;' +
						'background-image:url(/images/cancel.png);' +
						'">' +
						'</div>' +
					'</div>' +
				'</li>';

			selectedBox.children('ul').append(listItem);
			loadImage(imagesList[i], 'selectedImageItem' + i);

			$('#selectedImageItemButton' + i).click(function(event) {
				$(event.target).closest('li').remove();
				imagesList[parseInt(event.target.id.slice(23))] = null;
			});

		}

		selectedBox.children('ul').children('li').css({
			display: 'inline',
			marginBottom: '5px'
		});
	}

	function showDataForSelected(files) {
		if (!acceptImage) {
			showFilesForSelected(files);
		} else {
			showImagesForSelected(files);
		}
	}

	function setEvent() {
		$('#screencover').click(closeBox);

		$('#publishBoxCloseButtonBox').children('a').click(closeBox);

		$('#forImage').click(function() {
			$('#forFile').attr({
				checked: false
			});

			acceptImage = true;

			var temp = $('#forSelectedBox').children('ul').html();
			$('#forSelectedBox').children('ul').html(otherTypeHTML[0]);
			otherTypeHTML[0] = temp;

			$('#selectedBox').children('ul').html('');
			showImagesSelected();
		});

		$('#forFile').click(function() {
			$('#forImage').attr({
				checked: false
			});

			acceptImage = false;

			var temp = $('#forSelectedBox').children('ul').html();
			$('#forSelectedBox').children('ul').html(otherTypeHTML[0]);
			otherTypeHTML[0] = temp;

			$('#selectedBox').children('ul').html('');
			showFilesSelected();
		});

		$('#forSelectedBox').on('dragover', function(event) {
			event.stopPropagation();
			event.preventDefault();
		});

		$('#forSelectedBox').on('drop', function(event) {
			event.stopPropagation();
			event.preventDefault();

			var files = event.originalEvent.dataTransfer.files;
			showDataForSelected(files);
		});
	}

	return {
		startWidget: function(albumId) {
			if ($('#screencover').length <= 0 || $('#publishBox').length <= 0) {
				album = albumId;
				createCover();
				createBox();
				setEvent();
			} else {
				$('#forImage').click();
			}

			$('#screencover').fadeIn();
			$('#publishBox').fadeIn();
		}
	};
})();
	