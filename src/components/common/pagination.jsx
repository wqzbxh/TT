import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
  }
  
  handleClick = (page) => {
    this.setState({ currentPage: page });
    this.props.handlePageCallback(page);
  };
  
  renderPageNumbers = () => {
    const { totalItems, itemsPerPage } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
    const maxPageButtons = 9; // 设置页面显示的数量
    
    let startPage = 1;
    let endPage = totalPages;
    
    if (totalPages > maxPageButtons) {
      const middlePage = Math.floor(maxPageButtons / 2) + 1;
      if (this.state.currentPage >= middlePage && this.state.currentPage <= totalPages - middlePage + 1) {
        startPage = this.state.currentPage - middlePage + 2;
        endPage = this.state.currentPage + Math.floor(maxPageButtons / 2);
      } else if (this.state.currentPage < middlePage) {
        endPage = maxPageButtons;
      } else {
        startPage = totalPages - maxPageButtons + 1;
      }
      
      if (startPage > 1) {
        pageNumbers.push(<span key="ellipsis-start" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300">...</span>);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <a key={i}  className={`relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${i === this.state.currentPage ? 'bg-gray-600' : ''}`} onClick={() => this.handleClick(i)}>{i}</a>
      );
    }
    
    if (endPage < totalPages) {
      pageNumbers.push(<span key="ellipsis-end" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300">...</span>);
    }
    
    return pageNumbers;
  };
  
  render() {
    
    const { totalItems, itemsPerPage } = this.props;
    return (
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
         <div className="flex flex-1 justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
         </div>
         <div className="hidden flex sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div className='flex-none   w-80 '> 
                        <p className="text-sm text-gray-700">
                            {/* Showing
                            <span className="font-medium mx-1">1</span>
                            to */}
                            {/* <span className="font-medium mx-1">{itemsPerPage}</span> /*/}
                              Total 
                            <span className="font-medium mx-1">{totalItems}</span>
                            Record
                        </p>
                </div>
                <div className='flex-grow text-right'>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a   className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path  fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" fillRule="evenodd" />
                                </svg>
                                </a>
                                {this.renderPageNumbers()}
                               <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" fillRule="evenodd" />
                                </svg>
                                </a>
                            </nav>
                      </div>   
         </div>
      </div>
    );
  }
}

export default Pagination;
