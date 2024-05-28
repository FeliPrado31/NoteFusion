export default function PreviewSlide() {
  return (
    <article className='prose prose-stone dark:prose-invert flex-1 overflow-auto'>
      <p>
        This is a sample note. You can write and format your notes using
        Markdown syntax. The preview will update in real-time as you type.
      </p>
      <h2>Heading 2</h2>
      <p>
        This is a paragraph with
        <strong>bold</strong>, <em>italic</em>, and <s>strikethrough</s>
        text.
      </p>
      <pre>
        <code>console.log(&apos;Hello, NoteGenie!&apos;);</code>
      </pre>
      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
      </ul>
      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
      </ol>
    </article>
  );
}
