test_array = ["Hello", "Ruby is fun"]

def length_finder(test_array)
  test_array.collect! {|x| x.length}
end
