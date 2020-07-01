$(function () {
    console.log('running markdown script');

    const editorTextArea = $('#editor').find('textarea');
    const formatterTextArea = $('#formatter').find('textarea');
    editorTextArea.keydown(function () {
        formatterTextArea.html($(this).val());
    })
})