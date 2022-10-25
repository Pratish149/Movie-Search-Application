import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const darkTheme = createTheme({
    palette: {
        type: 'dark',
    }
})

function CustomPagination({ setPage, numOfPages }) {

    function handlePage(page) {

        setPage(page)
        window.scroll(0, 0)
    }

    return (
        <div className='pagination'>
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    size='large'
                    count={numOfPages}
                    onChange={(e) => handlePage(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination;