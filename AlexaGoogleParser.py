

alexa_file = "alexa.json"


def gather_alexa_json(alexa_file):
	with open (alexa_file, "r") as alexafile:
		alexa_data=alexafile.read().splitlines()
		return alexa_data


#Parses out intent names then puts them into a list
def parse_intent_names():
	lines = gather_alexa_json(alexa_file)
	intent_list = []
	intent_dict = {}
	intent_counter = 0
	# intent_sample_dict = {}
	for i in range (0,len(lines)):
		line = lines[i]
		if "types" in line:
			break
		if "name" in line and "slots" not in lines[i-2]:
			start = line.index(":") + 2
			end = line.index(",") 
			intent = line[start:end]
			intent_dict.update({intent_counter:intent})
			intent_counter += 1
	return intent_dict
			



#Parses out samples then puts them into lists for each intent
def parse_samples():
	lines = gather_alexa_json(alexa_file)
	intent_dict = parse_intent_names()
	sample_list = []
	sample_dict = {}
	counter = 0 
	for i in range(0, len(lines)):
		line = lines[i]
		if "samples" in line and "name" in lines[i-1]:
			for t in range(i+1, len(lines)):
				if "}," in lines[t] or "]," in lines[t]:
					break
				else:
					valid_line = lines[t] 
					if valid_line[-1:]==",":
						valid_line = valid_line[:-1]
					sample_list.append(valid_line.strip())
				sample_dict.update({counter:sample_list})
			sample_list = []
			counter += 1
	print sample_dict[0] 				
		


def build_intent_files(intent_names, sample_text):
	g_intent_start = """
		{
  		  "userSays": [
    		  {
      		    "id": NULL,
      			"data": [
        		  {
          			"text":"""

   	# print (g_intent_start)      

# def build_entity_files(entity_names, entries, synonyms):




# gather_alexa_json(alexa_file)
# build_intent_files("hello","hello")
# parse_intent_names()
parse_samples()
