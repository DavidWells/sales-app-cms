import React from 'react'
import CMS from 'netlify-cms'
import ImageControl from './ImageControl'
// import ImagePreview from './ImagePreview'

CMS.registerPreviewStyle('/styles.css')

CMS.registerWidget('image-preview', ImageControl)
