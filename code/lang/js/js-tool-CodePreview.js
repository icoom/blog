    function onPreview () {
        var code = $('.js-code').val(),  //获取代码字符串
            $preview = $('.js-preview'), 
            blob = new Blob([code], {  //注意一定要写type
                'type': 'text/html'
            }),
            url = URL.createObjectURL(blob), //生成url
            $iframe = $('<iframe src="' + url + '"></iframe>');
        $preview.html('').append($iframe);
    }
    /*
    * dom node
      <p>
          <a class="previewBtn" href="javascript:;" onclick="onPreview()">预览</a>
      </p>
      <div class="title-wrapper">
          <h2 class="title">编辑代码：</h2>
          <h2 class="title">查看效果：</h2>
      </div>
      <div class="code-wrapper">
          <div class="code">
              <textarea class="js-code"></textarea>
          </div>
          <div class="preview-container">
              <div class="preview js-preview"></div>
          </div>
      </div>
    */
    
    /*
    * css style
        html,
        body {
            height: 100%;
        }
        .title-wrapper,
        .code-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h2.title {
            width: 50%;
            color: red;
            padding: 0 20px;
            font-size: 14px;
        }
        .code-wrapper {
            width: 100%;
            height: 100%;
        }
        .previewBtn {
            display: inline-block;
            padding: 5px 30px;
            background-color: red;
            color: #fff;
            text-decoration: none;
        }
        .code,
        .preview-container {
            width: 50%;
            height: 100%;
            overflow: hidden;
            border: 1px solid #ccc;
        }
        .code {
            margin-right: 10px;
        }
        .code textarea {
            width: 100%;
            height: 100%;
            white-space: pre;
            resize: none;
            border: none;
            outline: none;
        }
        .preview-container .preview {
            width: 100%;
            height: 100%;
        }
        .preview-container iframe {
            display: block;
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
        }
    */
