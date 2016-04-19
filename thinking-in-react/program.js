import React from 'react'

export const FilterableProductTable = React.createClass({
  render() {
    return (
      <div>
      	<h1 style={{ fontFamily: 'Input Mono' }}>O hai, this is a table!</h1>
      	<SearchBar />
      </div>
    )
  }
})

export const SearchBar = React.createClass({
	render() {
		return (
			<form style={{ paddingLeft: '50px' }}>
				<input type="search" placeholder="Search..."/>
				<label>
					<input type="checkbox" />
					Only show products in stock
				</label>
			</form>
		)
	}
})
