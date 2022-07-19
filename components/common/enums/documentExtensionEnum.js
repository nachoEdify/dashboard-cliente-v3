import { BsFillFileEarmarkPdfFill, BsFillFileEarmarkWordFill, BsFillFileEarmarkExcelFill, BsFillFileEarmarkZipFill, BsFillFileEarmarkTextFill } from 'react-icons/bs'

export const documentExtensionEnum = {
    'pdf': {
        name: 'PDF',
        ext: '.pdf',
        icon: BsFillFileEarmarkPdfFill,
        color: '#F04438'
    },
    'doc': {
        name: 'DOC',
        ext: '.docx',
        icon: BsFillFileEarmarkWordFill,
        color: '#4E5BA6'
    },
    'excel': {
        name: 'EXCEL',
        ext: '.xlsx',
        icon: BsFillFileEarmarkExcelFill,
        color: '#039855'
    },
    'zip': {
        name: 'ZIP',
        ext: '.zip',
        icon: BsFillFileEarmarkZipFill,
        color: '#F63D68'
    },
    'txt': {
        name: 'TXT',
        ext: '.txt',
        icon: BsFillFileEarmarkTextFill,
        color: '#98A2B3'
    },
}