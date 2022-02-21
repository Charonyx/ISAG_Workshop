async function hello(req,res) {
    res.send('Hello World XD')
}

const hello2 = async(req,res) => {
    res.send('Hello World 2')
}

const getName = async(req,res) => {
    var _json = {
        'statusCode': 200,
        'message': {
            'name': 'Churairat',
            'surname': 'D.',
            'IsagMember': true
        }
    }
    res.send(_json)
}
module.exports  = {hello, hello2, getName}