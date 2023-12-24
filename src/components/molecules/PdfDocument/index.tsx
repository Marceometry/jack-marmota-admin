import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  View,
} from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
  },
})

type Props = {
  children: React.ReactNode
  title?: string
}

export function PdfDocument({ children, title }: Props) {
  return (
    <PDFViewer width="100%" height="100%">
      <Document title={title}>
        <Page>
          <View style={styles.section}>{children}</View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
