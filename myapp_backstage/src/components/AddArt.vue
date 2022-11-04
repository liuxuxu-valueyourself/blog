<template>
  <div class="addArt-container">
    <el-form ref="form" :model="form" class="form_style" label-width="80px">
      <el-form-item label="分类">
        <el-select v-model="form.className" placeholder="请选择文章分类">
          <el-option label="前端" value="前端"></el-option>
          <el-option label="后端" value="后端"></el-option>
          <el-option label="网络" value="网络"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="form.articleName"></el-input>
      </el-form-item>
      <el-form-item label="文章描述">
        <el-input v-model="form.articleDesc" type="textarea"></el-input>
      </el-form-item>
      <!--上传图片-->
      <el-form-item label="文章图片">
        <el-upload
          :auto-upload="false"
          action="#"
          list-type="picture-card">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              :src="file.url"
              alt="" class="el-upload-list__item-thumbnail"
            >
            <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
          </div>
        </el-upload>
      </el-form-item>
    </el-form>
    <div style="border: 1px solid #ccc; margin-top: 10px; width: 1000px">
      <!-- 工具栏 -->
      <Toolbar
        :defaultConfig="toolbarConfig"
        :editor="editor"
        style="border-bottom: 1px solid #ccc"
      />
      <!-- 编辑器 -->
      <Editor
        v-model="html"
        :defaultConfig="editorConfig"
        style="height: 400px; overflow-y: hidden"
        @onCreated="onCreated"
      />
    </div>
    <el-row>
      <el-button type="primary" @click="dialogVisibleName = true" class="sumbit_btn">提交文章</el-button>
    </el-row>
    <el-dialog :visible.sync="dialogVisible">
      <img :src="dialogImageUrl" alt="" width="100%">
    </el-dialog>
    <el-dialog
      :before-close="handleClose"
      :visible.sync="dialogVisibleName"
      title="提示"
      width="30%">
      <span>请输入作者</span>
      <el-input v-model="articleAvatar" placeholder="请输入作者"></el-input>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleName = false">取 消</el-button>
          <el-button type="primary" @click="printEditorHtml">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {Editor, Toolbar} from "@wangeditor/editor-for-vue";
import axios from '../../src/http/index'

export default {
  name: "MyEditor",
  components: {Editor, Toolbar},
  data() {
    return {
      editor: null,
      html: "<p>hello&nbsp;world</p>",
      toolbarConfig: {
        // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
        // excludeKeys: [ /* 隐藏哪些菜单 */ ],
      },
      editorConfig: {
        placeholder: "请输入内容...",
        // autoFocus: false,

        // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {},
      },
      form: {
        articleName: '',//文章标题
        className: '',//文章分类
        articleDesc: '',//文章描述
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      dialogVisibleName: false,
      articleAvatar:'',//文章作者
    };
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 【注意】一定要用 Object.seal() 否则会报错
    },
    printEditorHtml() {
      this.dialogVisibleName = false
      const editor = this.editor;
      if (editor == null) return;
      let data = {
        ...this.form,
        articleImg: '测试图片',
        articleContent: editor.getHtml(),
        articleAvatar: this.articleAvatar
      }
      if(this.articleAvatar == '') {
        this.$message.error('请输入文章作者');
        return
      }
      if(data.articleImg == '') {
        this.$message.error('请上传文章图片');
        return
      }
      if(data.articleContent == '') {
        this.$message.error('请填写文章内容');
        return
      }
      if(data.articleName == '') {
        this.$message.error('请填写文章标题');
        return
      }
      if(data.className == '') {
        this.$message.error('请填写文章分类');
        return
      }
      if(data.articleDesc == '') {
        this.$message.error('请填写文章描述');
        return
      }
      console.log('data', data)
      axios.post('/article/addArticle', data)
        .then(response => {
          if(response.data.msg=='success') {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            });
          }
          this.articleAvatar = '';
          this.html = '';
          this.form.articleDesc = '';
          this.form.className = '';
          this.form.articleName = '';
        })
        .catch(error => {
          this.$message({
            message: '添加文章失败'
          });
        })
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    // setTimeout(() => {
    //   this.html = "<p>Ajax 异步设置内容 HTML</p>";
    // }, 1500);
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁 editor ，重要！！！
  },
};
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped>
.addArt-container {
  padding-top: 20px;
  padding-left: 20px;
}

.form_style {
  width: 500px;
}
.sumbit_btn {
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
