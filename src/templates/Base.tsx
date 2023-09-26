import Html from '@kitajs/html'

const Base = Html.compile(({ children }: Html.PropsWithChildren) => (
  <>
    {'<!DOCTYPE html>'}
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          content="width=device-width, initial-scale=1.0"
          name="viewport"
        />
        <script src="public/htmx.min.js" />
        <link
          href="public/vanilla-styles/index.css"
          rel="stylesheet"
        />
        <title>The BETH Stack</title>
      </head>
      {children}
    </html>
  </>
))

export default Base
