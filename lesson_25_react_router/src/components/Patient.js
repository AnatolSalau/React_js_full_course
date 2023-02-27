function Patient({id, slug, title, measure}) {
      return (
            <div>
                  <p>{`Id: ${id}, link: ${slug}, title: ${title}, measure: ${measure}`}</p>
            </div>
      );
}

export default Patient;