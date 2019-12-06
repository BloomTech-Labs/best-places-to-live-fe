def rankify(df, factors, top=20, quant=.60):
    df_copy = df
    for i in factors:
        df_copy = df_copy[df[i] > df_copy[i].quantile(quant)]
    df_copy['score'] = df_copy[factors].mean(axis=1)
    df_copy = df_copy.sort_values('score', ascending=False)
   
    # truncate df row-wise to top 20 cities 
    df_copy = df_copy.head(top)
    
    # initialize columns to be masked
    columns = [
               'name', 
               'population', 
               'secure_url', # This is a photo url, should change the name...  
               'id',
               '_id',
               'short_name',
               'state',

               ]

    # truncate the dataframe column-wise to the ones in 'columns'
    df2 = df_copy[columns]

    return df2.to_dict(orient='record')