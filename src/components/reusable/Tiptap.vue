<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

export default {
  props: ["data"],
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    console.log(this.data);
    this.editor = new Editor({
      editable: false,
      content: this.data,
      extensions: [StarterKit],
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>